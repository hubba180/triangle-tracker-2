import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {
let reusableTriangle;
  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  test('Should label object correctly as "triangle"', () => {
    expect(reusableTriangle.triangleType).toEqual("triangle");
    });
  test('Should label object correctly as "Equilateral Triangle"', () =>  {
    expect(reusableTriangle.triangleKind).toEqual("Equilateral Triangle");
  });
  test('Should label object correctly as "Isosceles Triangle"', () => {
    expect(reusableTriangle.triangleKind).toEqual("Isosceles Triangle");
  });
});