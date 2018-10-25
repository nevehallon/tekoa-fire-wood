/*jshint esversion: 6 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as THREE from 'three';
    
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();

const c = document.createElement('canvas'), 
    ctx = c.getContext('2d'),
    cw = c.width = 200,
    ch = c.height = 200;

 for( let x = 0; x < cw; x++ ){
    for( let y = 0; y < ch; y++ ){
        ctx.fillStyle = 'hsl(0, 0%, ' + ( 100 - ( Math.random() * 15 ) ) + '%)';
        ctx.fillRect(x, y, 1, 1);
    }
} 

document.body.style.background = 'url(' + c.toDataURL() + ')';

var canvas, camera, renderer, scene, particleSystem, baseParticle, mouse;

    window.onload = function() {
        mouse = [window.innerWidth / 2, window.innerHeight / 2];
        renderer = new THREE.WebGLRenderer({ antialias: true });
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            20,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        camera.position.z = 50;
        scene.background = new THREE.Color("rgb(255, 0, 0, 0)");
        canvas = document.querySelector("#b canvas");
    
        baseParticle = new THREE.PlaneGeometry(1, 1, 1);
        baseParticle.applyMatrix(
            new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0, 0, Math.PI / 4))
        );
        for (let i = 0; i < baseParticle.vertices.length; i++) {
            if (Math.round(baseParticle.vertices[i].y) != 0) {
                baseParticle.vertices[i].x = 0;
                baseParticle.vertices[i].z = 0;
            }
        }
        baseParticle.mergeVertices();
        baseParticle.verticesNeedUpdate = true;
        baseParticle = new THREE.Mesh(
            baseParticle,
            new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0x555555 })
        );
        particleSystem = new ParticleSystem(99);
    
        render();
    };
    
    window.onresize = function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.onmousemove = function(e) {
        mouse = [e.clientX, e.clientY];
    };
    
    function randomFloat(a, b) {
        let r = Math.random() * (b - a) + a;
        return r;
    }
    
    function partToHex(part) {
        let h = part.toString(16);
        return h.length == 1 ? "0" + h : h;
    }
    
    console.log(partToHex(255));
    
    let color;
    function FireParticle() {
        this.direction;
        this.scaleSpeed;
        this.curAge;
    
        this.parent;
    
        this.obj;
        this.colorRamp = [
            [255, 255, 0],
            [255, 136, 34],
            [255, 17, 68],
            [153, 136, 136]
        ];
    
        this.update = function() {
            if (
                Math.abs(this.parent.pos.x - this.obj.position.x) > 10 ||
                Math.abs(-this.parent.pos.y - this.obj.position.y) > 10
            ) {
                this.obj.scale.x *= 0.8;
                this.obj.scale.y *= 0.8;
                this.obj.scale.z *= 0.8;
            }
    
            let point = this.curAge / 40;
            let pointRem = point % 1;
    
            if (Math.round(point) >= this.colorRamp.length - 1) {
                color = this.colorRamp[this.colorRamp.length - 1];
            } else {
                color = [
                    Math.floor(
                        this.colorRamp[Math.floor(point)][0] * (1 - pointRem) +
                            this.colorRamp[Math.floor(point) + 1][0] * pointRem
                    ),
                    Math.floor(
                        this.colorRamp[Math.floor(point)][1] * (1 - pointRem) +
                            this.colorRamp[Math.floor(point) + 1][1] * pointRem
                    ),
                    Math.floor(
                        this.colorRamp[Math.floor(point)][2] * (1 - pointRem) +
                            this.colorRamp[Math.floor(point) + 1][2] * pointRem
                    )
                ];
            }
    
            // console.log(color);
            color = partToHex(color[0]) + partToHex(color[1]) + partToHex(color[2]);
            // console.log(color)
            color = parseInt(color, 16);
            // console.log(color)
    
            this.obj.material.color.setHex(color);
    
            this.curAge++;
    
            if (this.obj.scale.x < 0.01) {
                this.init();
            }
    
            this.obj.position.x += this.direction.x;
            this.obj.position.y += this.direction.y;
            this.obj.position.z += this.direction.z;
    
            this.obj.scale.x *= this.scaleSpeed;
            this.obj.scale.y *= this.scaleSpeed;
            this.obj.scale.z *= this.scaleSpeed;
        };
    
        this.init = function() {
            this.direction = new THREE.Vector3(
                randomFloat(-0.01, 0.01),
                randomFloat(0.01, 0.1),
                randomFloat(-0.01, 0.01)
            );
            this.scaleSpeed = randomFloat(0.8, 0.99);
            this.curAge = 0;
    
            if (this.obj != undefined) {
                scene.remove(this.obj);
            }
    
            this.obj = baseParticle.clone();
            this.obj.position.set(
                this.parent.obj.position.x + randomFloat(-0.2, 0.2),
                this.parent.obj.position.y,
                this.parent.obj.position.z + randomFloat(-0.2, 0.2)
            );
            this.obj.scale.set(1, 2, 1);
            this.obj.material = this.obj.material.clone();
            // let size = randomFloat(.5, 1);
            // this.obj.scale.set(size, 2*size, size);
    
            for (let i = 0; i < randomFloat(0, 100); i++) {
                this.update();
            }
    
            scene.add(this.obj);
        };
    }
    
    function ParticleSystem(size) {
        this.particles = [];
        this.obj = new THREE.Group();
    
        this.p = new THREE.Vector3();
        this.d;
        this.dis;
        this.pos = new THREE.Vector3(0, 0, 0);
    
        this.init = function() {
            for (let i = 0; i < size; i++) {
                this.particles.push(new FireParticle());
                this.particles[i].parent = this;
                this.particles[i].init();
            }
    
            scene.add(this.obj);
        };
        this.init();
    
        this.update = function() {
            this.p.set(
                mouse[0] / window.innerWidth * 2 - 1,
                mouse[1] / window.innerHeight * 2 - 1.2,
                0.5
            );
            this.p.unproject(camera);
            this.d = this.p.sub(camera.position).normalize();
            this.dis = -camera.position.z / this.d.z;
            this.pos = camera.position.clone().add(this.d.multiplyScalar(this.dis));
    
            this.obj.position.x = this.pos.x;
            this.obj.position.y = -this.pos.y;
    
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
            }
    
            this.obj.rotation.y += 0.03;
        };
    }

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        particleSystem.update();
    }