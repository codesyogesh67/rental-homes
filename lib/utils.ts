import { UrlQueryParams, RemoveUrlQueryParams } from '@/types'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from 'query-string'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formUrlQuery({ params, keys, value }: UrlQueryParams) {

  const currentUrl = qs.parse(params)


   // Ensure that keys is an array and value is not null before iterating over them
   if (Array.isArray(keys) && value !== null) {
    // Iterate over keys and values arrays and set them in the URL
    keys.forEach((key: string, index: number) => {
      // Check if the index is within the bounds of the value array
      if (index < value.length) {
        currentUrl[key] = value[index];
      }
    });
  }

    const order = ["leaseType", "startDateTime", "endDateTime", "bathroomsCount", "bedroomsCount"];

  // Define the desired order of keys

  // Create a new object with keys sorted according to the specified order
  const sortedUrl:any = {};
  order.forEach((key) => {
    sortedUrl[key] = currentUrl[key];
  });

  // Manually stringify the query object with sorted keys
const queryString = Object.entries(sortedUrl)
.map(([key, value]: [string, any]) => `${key}=${encodeURIComponent(value)}`)
.join('&');

// Combine the URL path and the manually stringified query string
const newUrl = `${window.location.pathname}?${queryString}`;

  // return qs.stringifyUrl(
  //   {
  //     url: window.location.pathname,
  //     query: sortedUrl,
  //   },
  //   { skipNull: true }
  // )

  return newUrl
}



export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  if (Array.isArray(keysToRemove)) {
    keysToRemove.forEach((key: string) => {
      delete currentUrl[key];
    });
  } else {
    // If keysToRemove is not an array, treat it as a single key to remove
    delete currentUrl[keysToRemove];
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}