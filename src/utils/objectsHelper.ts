import {UserType, FollowedObjType} from "../types";

export const updateObjectsInArray = (items: Array<UserType>, itemId: number, objPropName: string, newObject: FollowedObjType) => {
  items.map((el) => {
    if (el[objPropName] === itemId) {
      return { ...el, newObject };
    }
    return el;
  });
};
