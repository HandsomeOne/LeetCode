// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html
class PeekingIterator implements Iterator<Integer> {

    boolean peeked = false;
    Integer val;
    Iterator<Integer> iterator;

	public PeekingIterator(Iterator<Integer> iterator) {
	    // initialize any member here.
	    this.iterator = iterator;
	}

    // Returns the next element in the iteration without advancing the iterator.
	public Integer peek() {
        if (!peeked) {
            peeked = true;
            val = iterator.next();
        }
        return val;
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	@Override
	public Integer next() {
	    if (peeked) {
	        peeked = false;
	        return val;
	    } else {
	        return iterator.next();
	    }
	}

	@Override
	public boolean hasNext() {
	    if (peeked) {
	        return true;
	    } else {
	        return iterator.hasNext();
	    }
	}
}
