// src/components/InfiniteScroll.js
import React, { useState, useCallback } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch new items (e.g., images) when the observer is triggered
  const loadMoreItems = useCallback(() => {
    if (loading) return; // Prevent duplicate requests while loading

    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 5 }, (_, index) => ({
          id: prevItems.length + index + 1,
          src: `https://picsum.photos/200/300?random=${prevItems.length + index + 1}`,
        })),
      ]);
      setLoading(false);
    }, 1000); // Simulate API call delay
  }, [loading]);

  // Use the custom hook to observe the last item
  const lastItemRef = useIntersectionObserver(loadMoreItems, {
    root: null, // viewport
    rootMargin: '100px', // Trigger the callback when the element is within 100px of the viewport
    threshold: 1.0, // Trigger when 100% of the element is visible
  });

  return (
    <div>
      <div className="image-list">
        {items.map((item) => (
          <img key={item.id} src={item.src} alt={`Image ${item.id}`} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={lastItemRef} />
    </div>
  );
};

export default InfiniteScroll;
