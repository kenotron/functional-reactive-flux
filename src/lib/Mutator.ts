export interface Action {
    (dispatch: DispatchFunction): void;
}

export interface Mutator {
    execute(dispatch: DispatchFunction): void;
}

export default Mutator;

export type DispatchFunction = (actionOrMutator: Action | Mutator) => void;
