import { isRef, reactive, computed, watch, ref } from '@vue/composition-api';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function unwrap(val) {
  return isRef(val) ? val.value : val;
}
function unwrapObj(obj) {
  var ignoreKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(obj).reduce(function (o, k) {
    if (ignoreKeys.includes(k)) return o;
    o[k] = unwrap(obj[k]);
    return o;
  }, {});
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && (_typeof(val) === 'object' || isFunction(val));
}
function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}

/**
 * @typedef NormalizedValidator
 * @property {Validator} $validator
 * @property {String | Ref<String> | function(*): string} [$message]
 * @property {Ref<Object>} [$params]
 */

/**
 * Response form a raw Validator function.
 * Should return a Boolean or an object with $invalid property.
 * @typedef {Boolean | { $invalid: Boolean }} ValidatorResponse
 */

/**
 * Raw validator function, before being normalized
 * Can return a Promise or a {@see ValidatorResponse}
 * @typedef {function(*): ((Promise<ValidatorResponse> | ValidatorResponse))} Validator
 */

/**
 * Sorts the validators for a state tree branch
 * @param {Object<NormalizedValidator|Function>} validations
 * @return {{ rules: Object<NormalizedValidator>, nestedValidators: Object, config: Object }}
 */

function sortValidations(validations) {
  var validationKeys = Object.keys(validations);
  var rules = {};
  var nestedValidators = {};
  var config = {};
  validationKeys.forEach(function (key) {
    var v = validations[key];

    switch (true) {
      // If it is already normalized, use it
      case isFunction(v.$validator):
        rules[key] = v;
        break;
      // If it is just a function, normalize it first
      // into { $validator: <Fun> }

      case isFunction(v):
        rules[key] = {
          $validator: v
        };
        break;
      // Catch $-prefixed properties as config

      case key.startsWith('$'):
        config[key] = v;
        break;
      // If it doesn’t match any of the above,
      // treat as nestedValidators state property

      default:
        nestedValidators[key] = v;
    }
  });
  return {
    rules: rules,
    nestedValidators: nestedValidators,
    config: config
  };
}
/**
 * Calls a validation rule by unwrapping it's value first from a ref.
 * @param {Validator} rule
 * @param {Ref} value
 * @return {Promise<ValidatorResponse> | ValidatorResponse}
 */


function callRule(rule, value) {
  var v = unwrap(value);
  return rule(v);
}
/**
 * Normalizes the validator result
 * Allows passing a boolean of an object like `{ $invalid: Boolean }`
 * @param {ValidatorResponse} result - Validator result
 * @return {Boolean}
 */


function normalizeValidatorResponse(result) {
  return result.$invalid !== undefined ? !result.$invalid : !result;
}
/**
 * Returns the result of the validator every time the model changes.
 * Wraps the call in a computed property.
 * Used for with normal functions.
 * TODO: This allows a validator to return $invalid, probably along with other parameters. We do not utilize them ATM.
 * @param {Validator} rule
 * @param {Ref<*>} model
 * @return {Ref<Boolean>}
 */


function createComputedResult(rule, model) {
  return computed(function () {
    var result = callRule(rule, model);
    return normalizeValidatorResponse(result);
  });
}
/**
 * Returns the result of an async validator.
 * @param {Function} rule
 * @param {Ref<*>} model
 * @param {Promise<Boolean>} initResult
 * @param {Ref<Boolean>} $pending
 * @return {Ref<Boolean>}
 */


function createAsyncResult(rule, model, initResult, $pending) {
  var $invalid = ref(true);
  $pending.value = true;
  console.log('init', model); // initResult.then(data => {
  //   $pending.value = false
  //   $invalid.value = normalizeValidatorResponse(data)
  // })

  watch(model, function (modelValue) {
    console.log('watcher', modelValue, model);
    var ruleResult = callRule(rule, modelValue);
    $pending.value = true;
    $invalid.value = true;
    ruleResult.then(function (data) {
      $pending.value = false;
      $invalid.value = !data;
    })["catch"](function () {
      $pending.value = false;
      $invalid.value = true;
    });
  }, // we set lazy: true to stop watcher eager invocation
  {
    lazy: true
  });
  return $invalid;
}
/**
 * Returns the validation result.
 * Detects async and sync validators.
 * @param {NormalizedValidator} rule
 * @param {*} model
 * @return {{$params: *, $message: Ref<String>, $pending: Ref<Boolean>, $invalid: Ref<Boolean>}}
 */


function createValidatorResult(rule, model) {
  var ruleResult = callRule(rule.$validator, model);
  var $pending = ref(false);
  var $params = rule.$params || {};
  var $invalid = isPromise(ruleResult) ? createAsyncResult(rule.$validator, model, ruleResult, $pending) : createComputedResult(rule.$validator, model);
  var message = rule.$message;
  var $message = isFunction(message) ? computed(function () {
    return message(unwrapObj({
      $pending: $pending,
      $invalid: $invalid,
      $params: $params,
      $model: model
    }));
  }) : message;
  return {
    $message: $message,
    $params: $params,
    $pending: $pending,
    $invalid: $invalid
  };
}
/**
 * @typedef ErrorObject
 * @property {Ref<String>} $message - Reactive error message
 * @property {Ref<Object>} $params - Params passed from withParams
 * @property {Ref<Boolean>} $pending - If validation is pending
 * @property {String} $property - Dot notation path to state
 * @property {String} $validator - Validator name
 */

/**
 * @typedef ValidationResult
 * @property {Ref<Boolean>} $pending
 * @property {Ref<Boolean>} $dirty
 * @property {Ref<Boolean>} $invalid
 * @property {Ref<Boolean>} $error
 * @property {Function} $touch
 * @property {Function} $reset
 * @property {Ref<ErrorObject[]>} $errors
 */

/**
 * Creates the main Validation Results object for a state tree
 * @param {Object<NormalizedValidator>} rules - Rules for the current state tree
 * @param {Object} state - Current state tree
 * @param {String} key - Key for the current state tree
 * @param {String} [parentKey] - Parent key of the state. Optional
 * @return {ValidationResult | {}}
 */


function createValidationResults(rules, state, key, parentKey) {
  var ruleKeys = Object.keys(rules);
  if (!ruleKeys.length) return {};
  var $dirty = ref(false);
  var result = {
    $dirty: $dirty,
    $touch: function $touch() {
      $dirty.value = true;
    },
    $reset: function $reset() {
      $dirty.value = false;
    }
  };
  ruleKeys.forEach(function (ruleKey) {
    result[ruleKey] = createValidatorResult(rules[ruleKey], state[key]);
  });
  result.$invalid = computed(function () {
    return ruleKeys.some(function (ruleKey) {
      return result[ruleKey].$invalid;
    });
  });
  result.$pending = computed(function () {
    return ruleKeys.some(function (ruleKey) {
      return result[ruleKey].$pending;
    });
  });
  result.$error = computed(function () {
    return result.$invalid.value && $dirty.value;
  });
  result.$errors = computed(function () {
    return ruleKeys.filter(function (ruleKey) {
      return unwrap(result[ruleKey]).$invalid;
    }).map(function (ruleKey) {
      var res = result[ruleKey];
      return {
        $property: parentKey ? "".concat(parentKey, ".").concat(key) : key,
        $validator: ruleKey,
        $message: res.$message,
        $params: res.$params,
        $pending: res.$pending
      };
    });
  });
  return result;
}
/**
 * Collects the validation results of all nested state properties
 * @param {Object<NormalizedValidator|Function>} validations - The validation
 * @param {Object} state - Parent state
 * @param {String} [key] - Parent level state key
 * @return {{}}
 */


function collectNestedValidationResults(validations, state, key) {
  var nestedValidationKeys = Object.keys(validations); // if we have no state, return empty object

  if (!nestedValidationKeys.length) return {};
  return nestedValidationKeys.reduce(function (results, nestedKey) {
    // if we have a key, use the nested state
    // else use top level state
    var nestedState = key ? state[key] : state; // build validation results for nested state

    results[nestedKey] = setValidations({
      validations: validations[nestedKey],
      state: nestedState,
      key: nestedKey,
      parentKey: key
    });
    return results;
  }, {});
}
/**
 * Generates the Meta fields from the results
 * @param {ValidationResult|{}} results
 * @param {Object<ValidationResult>} nestedResults
 * @return {{$anyDirty: Ref<Boolean>, $error: Ref<Boolean>, $invalid: Ref<Boolean>, $errors: Ref<ErrorObject[]>, $dirty: Ref<Boolean>}}
 */


function createMetaFields(results, nestedResults) {
  var $dirty = ref(false);
  var $errors = computed(function () {
    var modelErrors = unwrap(results.$errors) || [];
    var nestedErrors = Object.values(nestedResults).filter(function (result) {
      return result.$errors.length;
    }).reduce(function (errors, result) {
      return errors.concat.apply(errors, _toConsumableArray(result.$errors));
    }, []);
    return modelErrors.concat(nestedErrors);
  });
  var $invalid = computed(function () {
    return Object.values(nestedResults).some(function (r) {
      return r.$invalid;
    }) || unwrap(results.$invalid) || false;
  });
  var $pending = computed(function () {
    return Object.values(nestedResults).some(function (r) {
      return r.$pending;
    }) || unwrap(results.$pending) || false;
  });
  var $anyDirty = computed(function () {
    return Object.values(nestedResults).some(function (r) {
      return r.$dirty;
    });
  });
  var $error = computed(function () {
    return $invalid.value && $dirty.value || false;
  });
  return {
    $dirty: $dirty,
    $errors: $errors,
    $invalid: $invalid,
    $anyDirty: $anyDirty,
    $error: $error,
    $pending: $pending
  };
}
/**
 * @typedef VuelidateState
 * @property {Boolean} $anyDirty
 * @property {Boolean} $error
 * @property {Boolean} $pending
 * @property {Boolean} $invalid
 * @property {ErrorObject[]} $errors
 * @property {*} [$model]
 * @property {Function} $touch
 * @property {Boolean} $dirty
 * @property {Array} $errors
 * @property {Function} $reset
 */

/**
 * Main Vuelidate bootstrap function.
 * Used both for Composition API in `setup` and for Global App usage.
 * Used to collect validation state, when walking recursively down the state tree
 * @param {Object<NormalizedValidator|Function>} validations
 * @param {Object} state
 * @param {String} [key] - Current state property key. Used when being called on nested items
 * @param {String} [parentKey] - Parent state property key. Used when being called recursively
 * @param {Object} [childResults] - Used to collect child results. TBD
 * @return {UnwrapRef<VuelidateState>}
 */


function setValidations(_ref) {
  var validations = _ref.validations,
      state = _ref.state,
      key = _ref.key,
      parentKey = _ref.parentKey,
      childResults = _ref.childResults;

  // Sort out the validation object into:
  // – rules = validators for current state tree fragment
  // — nestedValidators = nested state fragments keys that might contain more validators
  // – config = configuration properties that affect this state fragment
  var _sortValidations = sortValidations(validations),
      rules = _sortValidations.rules,
      nestedValidators = _sortValidations.nestedValidators,
      config = _sortValidations.config; // Use rules for the current state fragment and validate it


  var results = createValidationResults(rules, state, key, parentKey); // Use nested keys to repeat the process
  // *WARN*: This is recursive

  var nestedResults = collectNestedValidationResults(nestedValidators, state, key); // Collect and merge this level validation results
  // with all nested validation results

  var _createMetaFields = createMetaFields(results, nestedResults),
      $dirty = _createMetaFields.$dirty,
      $errors = _createMetaFields.$errors,
      $invalid = _createMetaFields.$invalid,
      $anyDirty = _createMetaFields.$anyDirty,
      $error = _createMetaFields.$error,
      $pending = _createMetaFields.$pending;

  var $model = computed({
    get: function get() {
      return unwrap(state[key]);
    },
    set: function set(val) {
      $dirty.value = true;
      state[key].value = val;
    }
  });

  if (config.$autoDirty) {
    watch(state[key], function () {
      $dirty.value = true;
    }, // we set lazy: true to stop watcher eager invocation
    {
      lazy: true
    });
  }

  return reactive(Object.assign({}, results, {}, key ? {
    $model: $model
  } : {}, {
    $dirty: $dirty,
    $error: $error,
    $errors: $errors,
    $invalid: $invalid,
    $anyDirty: $anyDirty,
    $pending: $pending
  }, nestedResults));
}

/**
 * Composition API compatible Vuelidate
 * Use inside the `setup` lifecycle hook
 * @param {Object} validationsArg - Validations Object
 * @param {Object} state - State object
 * @param {String} registerAs
 * @return {UnwrapRef<*>}
 */

function useVuelidate(validationsArg, state, registerAs) {
  var validations = unwrap(validationsArg); //
  // const childResults = ref({})
  //
  // const injectToParent = inject(VuelidateSymbol, () => {})
  // // const childResults = computed(() => {
  // //   return childValidationsKeys.value.reduce((res, key, index) => {
  // //     res[key] = childValidationsResults.value[index]
  // //     console.log('res', res)
  // //     return res
  // //   }, {})
  // // })
  //
  // function injectChildResults (results, key) {
  //   childResults.value[key] = results
  //   console.log('saving', key)
  // }
  //
  // provide(VuelidateSymbol, injectChildResults)

  var validationResults = setValidations({
    validations: validations,
    state: state // childResults

  }); // if (registerAs) {
  //   injectToParent(validationResults, registerAs)
  // }

  return validationResults;
}
/**
 * Vuelidate mixin, used to attach Vuelidate only to specified components
 * Relies on `validations` option to be defined on component instance
 * @type {ComponentOptions}
 */

var VuelidateMixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;

    var options = this.$options;
    if (!options.validations) return;
    var validations = isFunction(options.validations) ? options.validations.call(this) : options.validations;
    if (!options.computed) options.computed = {};
    if (options.computed.$v) return;

    options.computed.$v = function () {
      return setValidations({
        validations: validations,
        state: _this
      });
    };
  }
};
/**
 * Default way to install Vuelidate globally for entire app.
 * @param {Vue} app
 */

function VuelidatePlugin(app) {
  app.mixin(VuelidateMixin);
}

export default useVuelidate;
export { VuelidateMixin, VuelidatePlugin };
