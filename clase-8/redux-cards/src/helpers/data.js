import assocPath from "ramda/src/assocPath";
import path from "ramda/src/path";
import pipe from "ramda/src/pipe";

export const removeFromArray = (array, target) => array.filter(n => n !== target);

export const addEntity = (state, entity, id) => {
  return pipe(
    assocPath(["entities", id], entity),
    assocPath(["ids"], [...state.ids, id])
  )(state);
};

export const addIdToChildren = (state, entityId, property, childId) => {
  const childrenPath = ["entities", entityId, property];
  const children = path(childrenPath, state);

  return assocPath(childrenPath, [...children, childId], state);
};


export const removeIdFromChildren = (state, entityId, property, childId) => {
  const childrenPath = ["entities", entityId, property];
  const children = path(childrenPath, state);

  return assocPath(childrenPath, removeFromArray(children, childId), state);
};
