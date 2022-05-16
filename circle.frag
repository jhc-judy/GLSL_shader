#ifdef GL_ES
precision mediump float;
#endif

float circleShape(vec2 pos, float rad){
    return step(rad, length(pos - vec2(0.5)));
}

//regulates numbers, instead of using large numbers
uniform vec2 u_resolution;

void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float circle = circleShape(pos, 0.2);

    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}