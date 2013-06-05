/**
 * next
 * Get the next sibling
 * 
 * @return {Element} next sibling
 * @api public
 */

exports.next = function () {
  return this.el.nextSibling;
};

/**
 * previous
 * Get the previous sibling
 * 
 * @return {Element} previous sibling
 * @api public
 */

exports.previous = function () {
  return this.el.previousSibling;
};

/**
 * parent
 * Get the parent node
 * 
 * @return {Element} parent
 * @api public
 */

exports.parent = function () {
  return this.el.parentNode;
};
