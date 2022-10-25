/**
 * get value
 * @param key
 */
export function get(key: string | number): any {
  const value = window.localStorage.getItem(String(key));
  return convertValueForGet(value);
}

/**
 * get all value Array
 */
export function getAllArray(): object[] {
  return Object.entries(window.localStorage).map(([key, value]) => get(key));
}

/**
 * get all value Object
 */
export function getAllObject(): object {
  let dataObject: any = {};

  Object.entries(window.localStorage).forEach(([key, value]) => {
    dataObject[key] = get(key);
  });

  return dataObject;
}

/**
 * set value
 * @param key
 * @param value
 */
export function set(key: string | number, value: any): boolean {
  try {
    window.localStorage.setItem(String(key), convertValueForSet(value));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * remove key & value
 * @param key
 * @param value
 */
export function del(key: string | number): boolean {
  try {
    window.localStorage.removeItem(String(key));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * clear all values
 */
export function clear(): boolean {
  try {
    window.localStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * convert value for localStorage getItem
 * @param value
 */
function convertValueForGet(value: any): any {
  try {
    return JSON.parse(value);
  } catch (e) {
    return String(value);
  }
}

/**
 * convert value for localStorage setItem
 * @param value
 */
function convertValueForSet(value: any): string {
  if (typeof value == "object") return JSON.stringify(value);

  return String(value);
}
