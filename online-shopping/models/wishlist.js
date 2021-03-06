var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = Schema({
  name: { type: String, required: true },
  category: { type: Schema.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  //seller: { type: String, required: true }, // will change from string to object later
  price: { type: Number, required: true }
});

ItemSchema
.virtual('url')
.get(function() {
  return '/items/' + this.slug;
});

module.exports = mongoose.model('Item', ItemSchema);
