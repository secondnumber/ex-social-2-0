import {UserType, FollowedObjType} from "../types";

export const updateObjectsInArray = (items: Array<UserType>, itemId: number, objPropName: string, newObject: FollowedObjType): any => {
  items.map((el) => {
    // @ts-ignore
    if (el[objPropName] === itemId) {
      return { ...el, newObject };
    }
    return el;
  });
};
