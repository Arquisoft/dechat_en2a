package es.uniovi.asw.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;
import java.util.Random;
import java.util.stream.IntStream;

public class LongProcess {

    private static final Logger LOG = LoggerFactory.getLogger(LongProcess.class);

    /**
     * Sorts a random stream of values of some size a number of times
     * @param times number of times to sort the stream
     * @param size size of the stream
     * @param random random number generator
     * @return time elapsed in milliseconds
     */
    public static long sortStream(int times, int size, Random random) {
        LOG.info("Sorting " + size + " random elements " + times + "times");
        long millis0 = System.currentTimeMillis();
        IntStream.range(1, times).forEach(i -> {
            IntStream randoms = IntStream.range(1, size).map(j -> random.nextInt());
            Arrays.asList(randoms.sorted().toArray());
        });
        long millis1 = System.currentTimeMillis();
        long elapsed = millis1 - millis0;
        LOG.info("Elapsed: " + elapsed);
        return elapsed;
    }
}

