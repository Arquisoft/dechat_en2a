package es.uniovi.asw;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.util.NestedServletException;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class SimpleTests {

    @Autowired
    private MockMvc mvc;

    @Test
    public void landingPageTest() throws Exception {
        this.mvc.perform(get("/")).andExpect(status().isOk());
    }

    @Test
    public void SearchTest() throws Exception {
        this.mvc.perform(get("/search?name=foo")).andExpect(status().isOk());
    }

    @Test
    public void SortTest() throws Exception {
        this.mvc.perform(get("/sort")).andExpect(status().isOk());
    }

    @Test(expected = NestedServletException.class)
    public void SearchErrorTest() throws Exception {
        this.mvc.perform(get("/search?name=error")).andExpect(status().isOk());
    }
}