/**
 * Example component for A-Frame.
 */
module.exports.component = {
  schema: {
    bevelEnabled: { default: false },
    bevelSize: { default: 8, min: 0 },
    bevelThickness: { default: 12, min: 0 },
    curveSegments: { default: 12, min: 0 },
    font: { default: 'helvetiker', min: 0 },
    height: { default: 50, min: 0 },
    size: { default: 12, min: 0 },
    style: { default: 'normal', oneOf: [ 'normal', 'italics' ] },
    text: { default: '' },
    weight: { default: 'normal', oneOf: [ 'normal', 'bold' ] }
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    this.el.object3D = getTextGeometry(data);
  }
};

function getTextGeometry (data) {
  return new THREE.TextGeometry(data.text, data);
}