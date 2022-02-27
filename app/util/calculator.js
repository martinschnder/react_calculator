export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0" || state.currentValue === null) {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

export const handleEqual = (state) => {
  const current = parseFloat(state.currentValue);
  const previous = parseFloat(state.previousValue);

  if (state.operator === "+") {
    return {
      currentValue: `${previous + current}`,
      operator: null,
      previousValue: null,
    };
  }

  if (state.operator === "-") {
    return {
      currentValue: `${previous - current}`,
      operator: null,
      previousValue: null,
    };
  }

  if (state.operator === "x") {
    return {
      currentValue: `${previous * current}`,
      operator: null,
      previousValue: null,
    };
  }

  if (state.operator === "/") {
    return {
      currentValue: `${(previous / current).toFixed(5)}`,
      operator: null,
      previousValue: null,
    };
  }

  if (state.operator === "%") {
    return {
      currentValue: `${(previous / current).toFixed(5)}`,
      operator: null,
      previousValue: null,
    };
  }
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: null,
      };
    case "equal":
      return handleEqual(state);
    case "AC":
      return initialState;
    case "Del":
      return {
        currentValue: state.currentValue.slice(0, -1),
        previousValue: state.previousValue,
        operator: state.operator,
      };
  }
};

export default calculator;
