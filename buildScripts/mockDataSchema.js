export const schema = {
  "type": "object",
  "properties": {
    "numbers": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "number",
        "minimum": 0,
        "maximum": 100,
      }
    }
  },
  "required": ["numbers"]
};
