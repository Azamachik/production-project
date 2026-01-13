import { classNames } from './classNames';

describe('classNames', () => {
    test('Should return single class when only one param provided', () => {
        const expectedResult = 'class';
        expect(classNames('class')).toEqual(expectedResult);
    });

    test('Should return combined classes', () => {
        const expectedResult = 'mainClass class1 class2';
        expect(classNames(
            'mainClass',
            {},
            ['class1', 'class2'],
        ))
            .toEqual(expectedResult);
    });

    test('Should ignore false and undefined mods', () => {
        const expectedResult = 'mainClass class1 class2 hidden';
        expect(classNames(
            'mainClass',
            { hovered: undefined, scrollable: false, hidden: true },
            ['class1', 'class2'],
        ))
            .toEqual(expectedResult);
    });
});
