// -----JS CODE-----
// @input SceneObject faceplate

var time = getTime()
if (time < .5) {
    var transform = script.faceplate.getTransform()
    var rotation = transform.getLocalRotation()
    var rotateBy = quat.angleAxis(Math.PI * getDeltaTime(), vec3.left())
    print(rotateBy)
    rotation = rotation.multiply(rotateBy)
    transform.setLocalRotation(rotation)    
}
