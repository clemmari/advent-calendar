import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-day1-component',
    templateUrl: './day1-component.component.html',
    styleUrls: ['./day1-component.component.scss'],
})
export class Day1ComponentComponent implements OnInit {
    public mass: number[] = [
        133260,
        119757,
        96870,
        121480,
        117382,
        55048,
        69153,
        62034,
        91338,
        103765,
        83785,
        131184,
        104233,
        110416,
        148887,
        99294,
        74823,
        57239,
        81762,
        82823,
        145571,
        145651,
        137455,
        133118,
        110781,
        95863,
        142314,
        76372,
        69844,
        137365,
        132652,
        142302,
        69939,
        143053,
        149392,
        147016,
        129061,
        87660,
        66276,
        64079,
        125333,
        51086,
        75200,
        113872,
        115114,
        104887,
        131348,
        75771,
        96196,
        107870,
        81992,
        120446,
        67121,
        138297,
        95714,
        124640,
        85661,
        126056,
        147826,
        61260,
        93073,
        140265,
        148180,
        110608,
        122923,
        84648,
        59543,
        60255,
        138945,
        54827,
        108982,
        111705,
        63154,
        94992,
        147190,
        90948,
        138888,
        134520,
        137666,
        130558,
        81806,
        92769,
        130727,
        105700,
        71253,
        68850,
        88345,
        131670,
        123817,
        115542,
        112023,
        72065,
        126939,
        67192,
        94812,
        133914,
        132832,
        111445,
        73006,
        97852,
    ];

    public mass2: number[] = [133260, 119757, 96870, 121480, 117382, 55048];

    public fuel: number[] = [];
    public result = 0;

    constructor() {}

    ngOnInit() {
        this.mass.forEach((o: number) => {
            this.result += this.Calculator(o);
        });
    }

    public Calculator(value: number): number {
        let result = 0;
        value = Math.floor(value / 3 - 2);
        result = value;
        while (value > 0) {
            value = Math.floor(value / 3 - 2);
            if (value > 0) {
                result += value;
            }
        }
        return result;
    }
}
