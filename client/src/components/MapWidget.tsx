import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface Location {
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
}

export default function MapWidget() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);

  const locations: Location[] = [
    {
      name: "Main Office",
      address: "123 Business Street, Suite 100, Your City, ST 12345",
      lat: 40.7128,
      lng: -74.006,
      phone: "(555) 123-4567",
    },
    {
      name: "Downtown Branch",
      address: "456 Commerce Ave, Suite 200, Your City, ST 12345",
      lat: 40.758,
      lng: -73.9855,
      phone: "(555) 234-5678",
    },
    {
      name: "Suburban Office",
      address: "789 Oak Lane, Suite 300, Your City, ST 12345",
      lat: 40.6892,
      lng: -74.0445,
      phone: "(555) 345-6789",
    },
  ];

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // Check if Google Maps API is available
      if (typeof google === "undefined" || !google.maps) {
        setLoading(false);
        return;
      }

      const mapOptions: google.maps.MapOptions = {
        zoom: 12,
        center: { lat: locations[0].lat, lng: locations[0].lng },
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }],
          },
        ],
      };

      const newMap = new google.maps.Map(mapRef.current, mapOptions);
      setMap(newMap);

      // Add markers for each location
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: newMap,
          title: location.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; font-family: Arial, sans-serif;">
              <h3 style="margin: 0 0 5px 0; color: #059669; font-weight: bold;">${location.name}</h3>
              <p style="margin: 0 0 5px 0; font-size: 12px;">${location.address}</p>
              <p style="margin: 0; font-size: 12px; color: #059669;">${location.phone}</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(newMap, marker);
        });
      });

      setLoading(false);
    };

    // Load Google Maps API script if not already loaded
    if (typeof google === "undefined" || !google.maps) {
      const script = document.createElement("script");
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
      
      if (apiKey) {
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        // If no API key, show message
        setLoading(false);
      }
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
        {loading ? (
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-600">Loading map...</p>
          </div>
        ) : !import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">
                Google Maps API key not configured
              </p>
              <p className="text-sm text-gray-500">
                Add VITE_GOOGLE_MAPS_API_KEY to environment variables to enable the map
              </p>
            </div>
          </div>
        ) : (
          <div ref={mapRef} className="w-full h-96" />
        )}
      </div>

      {/* Locations List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {locations.map((location, index) => (
          <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {location.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{location.address}</p>
            <a
              href={`tel:${location.phone}`}
              className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm"
            >
              {location.phone}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
