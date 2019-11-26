import assocPath from "ramda/src/assocPath";
import path from "ramda/src/path";
import pipe from "ramda/src/pipe";

export const addItemToEntity = (entityId, property, content, state) => {
  const pathProperty = ["entities", entityId, property];
  const contentProperty = path(pathProperty, state);
  return assocPath(pathProperty, [...contentProperty, content], state);
};

export const addEntity = (entityId, entity, state) => {
  const newEntity = {
    [entityId]: {
      ...entity,
      id: entityId
    }
  };

  return pipe(
    assocPath(["entities"], { ...state.entities, ...newEntity }),
    assocPath(["ids"], [...state.ids, entityId])
  )(state);
};
