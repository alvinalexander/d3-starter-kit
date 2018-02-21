export const schema = {
  "type": "object",
  "properties": {
    "numbers": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "number"
      }
    }
  },
  "required": ["numbers"]
};
