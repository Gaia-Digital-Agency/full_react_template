/**
 * ==========================================================================
 * USE VISITOR INFO HOOK
 * ==========================================================================
 * 
 * Custom React hook for fetching and managing visitor information:
 * - Visitor count (simulated/session-based)
 * - Geographic location via IP geolocation
 * - Current local time (auto-updating)
 * 
 * This hook demonstrates:
 * - Fetch API usage with error handling
 * - setInterval for real-time updates
 * - Cleanup patterns for effects
 */

import { useState, useEffect, useCallback } from 'react';
import { VisitorInfo, VisitorLocation } from '@/types';
import { formatTime, randomInRange } from '@/utils/helpers';

/**
 * Hook configuration options
 */
interface UseVisitorInfoOptions {
  /** Enable auto-updating time (default: true) */
  autoUpdateTime?: boolean;
  /** Time update interval in ms (default: 1000) */
  timeUpdateInterval?: number;
  /** Enable geolocation fetch (default: true) */
  fetchLocation?: boolean;
}

/**
 * Default hook options
 */
const DEFAULT_OPTIONS: UseVisitorInfoOptions = {
  autoUpdateTime: true,
  timeUpdateInterval: 1000,
  fetchLocation: true,
};

/**
 * Fetches visitor's location from IP geolocation API
 * Uses ipapi.co - free tier allows 1000 requests/day
 * 
 * @returns Promise with location data or null on error
 */
async function fetchGeoLocation(): Promise<VisitorLocation | null> {
  try {
    // Using ipapi.co for free geolocation
    // Alternative: ip-api.com, ipinfo.io
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Geolocation API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      city: data.city || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'XX',
      region: data.region || '',
      timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  } catch (error) {
    console.warn('Failed to fetch geolocation:', error);
    return null;
  }
}

/**
 * Generates a simulated visitor count
 * In production, this would connect to an analytics service
 * 
 * @returns Simulated visitor count
 */
function generateVisitorCount(): number {
  // Simulate a realistic visitor count
  // Base count + random variation
  const baseCount = 1247;
  const variation = randomInRange(0, 50);
  return baseCount + variation;
}

/**
 * Custom hook for managing visitor information
 * 
 * @param options - Configuration options
 * @returns Visitor info state object
 * 
 * @example
 * const { visitorCount, location, currentTime, isLoading } = useVisitorInfo();
 */
export function useVisitorInfo(options: UseVisitorInfoOptions = {}): VisitorInfo {
  // Merge provided options with defaults
  const config = { ...DEFAULT_OPTIONS, ...options };

  // State for visitor information
  const [visitorCount] = useState<number>(() => generateVisitorCount());
  const [location, setLocation] = useState<VisitorLocation | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Updates the current time based on detected timezone
   */
  const updateTime = useCallback((timezone?: string) => {
    setCurrentTime(formatTime(timezone));
  }, []);

  /**
   * Effect: Fetch geolocation data on mount
   */
  useEffect(() => {
    if (!config.fetchLocation) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    const fetchData = async () => {
      try {
        const locationData = await fetchGeoLocation();
        
        if (isMounted) {
          if (locationData) {
            setLocation(locationData);
            updateTime(locationData.timezone);
          } else {
            // Fallback to browser timezone if geolocation fails
            updateTime();
          }
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load location data');
          updateTime(); // Still update time with local timezone
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, [config.fetchLocation, updateTime]);

  /**
   * Effect: Set up interval for auto-updating time
   */
  useEffect(() => {
    if (!config.autoUpdateTime) return;

    // Update time immediately
    updateTime(location?.timezone);

    // Set up interval for continuous updates
    const intervalId = setInterval(() => {
      updateTime(location?.timezone);
    }, config.timeUpdateInterval);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [config.autoUpdateTime, config.timeUpdateInterval, location?.timezone, updateTime]);

  return {
    visitorCount,
    location,
    currentTime,
    isLoading,
    error,
  };
}

/**
 * Export default for convenient importing
 */
export default useVisitorInfo;
