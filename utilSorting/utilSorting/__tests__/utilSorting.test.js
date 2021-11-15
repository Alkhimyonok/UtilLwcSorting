import {UtilSorting} from 'c/utilSorting';
import {SORT_DIRECTIONS} from 'c/utilSorting';

const OBJECTS = [
    {string: null, number: null, boolean: false},
    {string: 'A', number: 1, boolean: true},
    {string: 'B', number: 2, boolean: false},
    {string: undefined, number: undefined, boolean: undefined},
    {string: 'C', number: 3, boolean: false},
    {string: null, number: NaN, boolean: true},
    {string: 'D', number: null, boolean: true}
];

const OBJECTS_SORTED_BY_STRING_ASC = [
    {string: 'A', number: 1, boolean: true},
    {string: 'B', number: 2, boolean: false},
    {string: 'C', number: 3, boolean: false},
    {string: 'D', number: null, boolean: true},
    {string: null, number: null, boolean: false},
    {string: undefined, number: undefined, boolean: undefined},
    {string: null, number: NaN, boolean: true}
];

const OBJECTS_SORTED_BY_STRING_DESC = [
    {string: 'D', number: null, boolean: true},
    {string: 'C', number: 3, boolean: false},
    {string: 'B', number: 2, boolean: false},
    {string: 'A', number: 1, boolean: true},
    {string: null, number: null, boolean: false},
    {string: undefined, number: undefined, boolean: undefined},
    {string: null, number: NaN, boolean: true}
];

const OBJECTS_SORTED_BY_NUMBER_ASC = [
    {string: 'A', number: 1, boolean: true},
    {string: 'B', number: 2, boolean: false},
    {string: 'C', number: 3, boolean: false},
    {string: null, number: NaN, boolean: true},
    {string: null, number: null, boolean: false},
    {string: undefined, number: undefined, boolean: undefined},
    {string: 'D', number: null, boolean: true}
];

const OBJECTS_SORTED_BY_NUMBER_DESC = [
    {string: 'C', number: 3, boolean: false},
    {string: 'B', number: 2, boolean: false},
    {string: 'A', number: 1, boolean: true},
    {string: null, number: NaN, boolean: true},
    {string: null, number: null, boolean: false},
    {string: undefined, number: undefined, boolean: undefined},
    {string: 'D', number: null, boolean: true}
];

const OBJECTS_SORTED_BY_BOOLEAN_ASC = [
    {string: null, number: null, boolean: false},
    {string: 'B', number: 2, boolean: false},
    {string: 'C', number: 3, boolean: false},
    {string: 'A', number: 1, boolean: true},
    {string: null, number: NaN, boolean: true},
    {string: 'D', number: null, boolean: true},
    {string: undefined, number: undefined, boolean: undefined},
];

const OBJECTS_SORTED_BY_BOOLEAN_DESC = [
    {string: 'A', number: 1, boolean: true},
    {string: null, number: NaN, boolean: true},
    {string: 'D', number: null, boolean: true},
    {string: null, number: null, boolean: false},
    {string: 'B', number: 2, boolean: false},
    {string: 'C', number: 3, boolean: false},
    {string: undefined, number: undefined, boolean: undefined}
];

export const FIELD_NAMES = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean'
}

describe('c-utilSorting', () => {
    it('should correctly sort by string ascending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.STRING, SORT_DIRECTIONS.ASC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_STRING_ASC);
    });

    it('should correctly sort by string descending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.STRING, SORT_DIRECTIONS.DESC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_STRING_DESC);
    });

    it('should correctly sort by number ascending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.NUMBER, SORT_DIRECTIONS.ASC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_NUMBER_ASC);
    });

    it('should correctly sort by number descending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.NUMBER, SORT_DIRECTIONS.DESC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_NUMBER_DESC);
    });

    it('should correctly sort by boolean ascending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.BOOLEAN, SORT_DIRECTIONS.ASC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_BOOLEAN_ASC);
    });

    it('should correctly sort by boolean descending', () => {
        const actualSortingObjects = UtilSorting.sortObjects(OBJECTS, FIELD_NAMES.BOOLEAN, SORT_DIRECTIONS.DESC);
        expect(actualSortingObjects).toEqual(OBJECTS_SORTED_BY_BOOLEAN_DESC);
    });
});