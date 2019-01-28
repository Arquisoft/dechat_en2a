package es.uniovi.asw.steps;

import es.uniovi.asw.Application;
import org.junit.runner.RunWith;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@ContextConfiguration(classes = Application.class)
public class SearchSteps {

  @Autowired
  private MockMvc mvc;
  private ResultActions resultActions = null ;

  @Given("^I go to the landing page$")
  public void i_go_to_the_landing_page() throws Throwable {
    this.mvc.perform(get("/")).andExpect(status().isOk());
  }

  @When("^I search user \"([^\"]*)\"$")
  public void i_search_user(String name) throws Throwable {
    resultActions = this.mvc.perform(get("/search?name=" + name));
  }

  @Then("^I obtain a (\\d+) message$")
  public void i_obtain_a_message(int value) throws Throwable {
    resultActions.andExpect(status().is(value));
  }
}
