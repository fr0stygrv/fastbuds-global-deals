const STORAGE_PREFIX = 'coupon_usage_';
const MAX_COUNT = 999;

export const getUsageCount = (couponId: string, initialCount: number): number => {
  try {
    const key = `${STORAGE_PREFIX}${couponId}`;
    const stored = localStorage.getItem(key);
    
    if (stored === null) {
      return initialCount;
    }
    
    const parsedValue = parseInt(stored, 10);
    return isNaN(parsedValue) ? initialCount : parsedValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return initialCount;
  }
};

export const incrementUsageCount = (couponId: string, initialCount: number): number => {
  try {
    const currentCount = getUsageCount(couponId, initialCount);
    const key = `${STORAGE_PREFIX}${couponId}`;
    
    // Если достигли максимума - сбрасываем до начального значения
    if (currentCount >= MAX_COUNT) {
      localStorage.setItem(key, initialCount.toString());
      return initialCount;
    }
    
    // Иначе увеличиваем на 1
    const newCount = currentCount + 1;
    localStorage.setItem(key, newCount.toString());
    return newCount;
  } catch (error) {
    console.error('Error writing to localStorage:', error);
    return initialCount;
  }
};
