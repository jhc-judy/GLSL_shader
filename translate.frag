#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleShape(vec2 pos, float rad){
    return step(rad, length(pos - vec2(0.5)));
}

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    vec2 translate = vec2(0.0, 0.4);
    coord += translate;

    color += vec3(circleShape(coord, 0.1));

    gl_FragColor = vec4(color, 1.0);
}