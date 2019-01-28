package es.uniovi.asw.controller;

import es.uniovi.asw.utils.LongProcess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import java.util.Random;

@Controller
public class MainController {

  private final int DefaultTimes = 500 ;
  private final int DefaultSize = 1000 ;
  private Random random = new Random();
  private static final Logger LOG = LoggerFactory.getLogger(MainController.class);


  /**
    * Landing page
    * @return default model
    */
  @RequestMapping("/")
  public ModelAndView landing() {

      return new ModelAndView("landing");
  }

  /**
    * Sorts an array with a random size a random numer of times
    * @return model populated with elapsed time
    */
  @RequestMapping("/sort")
  public ModelAndView sort() {
    int times = DefaultTimes + random.nextInt(DefaultTimes);
    int size = DefaultSize + random.nextInt(DefaultSize);
    long elapsed = LongProcess.sortStream(times,size,random);
    ModelAndView model = new ModelAndView("sort");
    model.addObject("size", size);
    model.addObject("times", times);
    model.addObject("elapsed", elapsed);
    return model;
  }

    /**
     * Simulates the search of some name
     * If the name = long, it will call longProcess so it will take longer
     * If the name = error, it will raise an exception
     * By default, it will return OK after calling longProcess with some random times and size values
     * @param name name to search
     * @return model populated with elapsed time
     */
  @RequestMapping(path ="/search", method = RequestMethod.GET)
  public ModelAndView search(@RequestParam("name") String name) {
    LOG.info("Searching..." + name);
    long elapsed;
    switch (name) {
        case "long":
            elapsed = LongProcess.sortStream(DefaultTimes,DefaultSize,random);
        break;
        case "error":
            throw new RuntimeException("Name 'error' not found");
        default:
            elapsed = LongProcess.sortStream(random.nextInt(DefaultTimes),random.nextInt(DefaultSize),random);
    }
    ModelAndView model = new ModelAndView("search");
    model.addObject("name",name);
    model.addObject("elapsed",elapsed);
    return model;
  }
}
