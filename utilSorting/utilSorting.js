export const SORT_DIRECTIONS = {
    ASC: 'asc',
    DESC: 'desc',
    DEFAULT: 'desc'
}

class UtilSorting {

    /**
     * Creates a shallow copy of objects array and sorts it according to sortByFieldName and sortDirection params.
     * Nulls and undefined values go last.
     * @param objects {Array} - an array of objects
     * @param sortByFieldName {String} - a name of the field to sort on
     * @param sortDirection {String} - desc or asc
     * @return {Array} a sorted shallow copy of the incoming objects array
     */
    static sortObjects(objects, sortByFieldName, sortDirection) {
        const comparisonVector = sortDirection === SORT_DIRECTIONS.ASC ? 1 : -1;

        return [...objects].sort((a, b) => {
            const valueA = a[sortByFieldName];
            const valueB = b[sortByFieldName];

            if (Object.is(valueA, valueB)) {
                return 0;
            }

            //nulls go last
            if (valueA == null) {
                return 1;
            }
            if (valueB == null) {
                return -1;
            }

            if (valueA > valueB) {
                return comparisonVector;
            }

            if (valueA < valueB) {
                return -comparisonVector;
            }
        });
    }
}

export {UtilSorting}