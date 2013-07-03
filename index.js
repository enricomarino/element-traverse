module.exports = function (element) { 
  
  /**
   * next
   * Get the next sibling
   * 
   * @return {Element} next sibling
   * @api public
   */
  
  element.prototype.next = function () {
    return this.el.nextSibling;
  };
  
  /**
   * previous
   * Get the previous sibling
   * 
   * @return {Element} previous sibling
   * @api public
   */
  
  element.prototype.previous = function () {
    return this.el.previousSibling;
  };
  
  /**
   * parent
   * Get the parent node
   * 
   * @return {Element} parent
   * @api public
   */
  
  element.prototype.parent = function () {
    return this.el.parentNode;
  };

  return element;
};
