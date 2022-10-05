import { v4 as uuidv4 } from "uuid";

/**
 * Добавляет поле _uuid и возвращает новый объект
 * @param obj Любой объект
 * @returns Новый объект с полем {_uuid: уникальная строка}
 */
export const addUuidToObject = <T extends { [key: string]: unknown }>(
  obj: T
) => ({
  ...obj,
  _uuid: uuidv4(),
});
