import { useState, useEffect } from 'react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  area: string;
  type: string;
  features: string[];
  image: string;
  status: string;
}

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      // Fetch from GitHub raw content
      const response = await fetch('https://raw.githubusercontent.com/propertybd/propertybd/main/src/data/properties.json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      console.error('Error fetching properties:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
    
    // Auto refresh every 30 seconds for live updates
    const interval = setInterval(fetchProperties, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { properties, loading, error, refetch: fetchProperties };
};