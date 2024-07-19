export const storage = {
  /**
   * Example: const user = { name: "John", age: 30 };
   * save("user", user);
   *
   * @param name
   * @param data
   */
  save: <T>(name: string, data: T): void => {
    localStorage.setItem(name, JSON.stringify(data));
  },

  /**
   * Example:const loadedUser = get<{ name: string; age: number }>("user");
   * console.log(loadedUser); // { name: "John", age: 30 }
   *
   * @param name
   * @returns
   */
  get: <T>(name: string): T | null => {
    const item = localStorage.getItem(name);
    return item ? (JSON.parse(item) as T) : null;
  },

  /**
   * Remove
   * Example: remove("user");
   * @param name
   */
  remove: (name: string): void => {
    localStorage.removeItem(name);
  },
};
