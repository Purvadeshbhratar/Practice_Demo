import {expect, test} from '@playwright/test';
import { request } from 'http';

//GET METHOD
test("Get Response", async ({ request }) => {
  const resp1 = await request.get("https://fakestoreapi.com/products/1");
  expect(resp1.ok()).toBeTruthy();
  expect(resp1.status()).toBe(200);
  expect(resp1.statusText()).toBe("OK");
  console.log(await resp1.json());
  
});

//POST METHOD
test("Post Response", async ({ request }) => {
  const resp1 = await request.post("https://reqres.in/api/users",{
    data: {
      "name": "James",
      "job": "leader"
    }
  });
  const jsonresp1 = await resp1.json();
  expect(resp1.status()).toBe(201);
  console.log(jsonresp1);
  
});

//PUT METHOD
test("Put Response", async({request}) => {
  const resp1 = await request.put("https://reqres.in/api/users/2", {
    data: {
      "name": "Jill",
      "job": "Software Engineer"
    }
  })
  expect(resp1.status()).toBe(200);
  expect(resp1.ok()).toBeTruthy();
  expect(resp1.statusText()).toBe("ok");
  console.log(await resp1.json());
})

//DELETE METHOD
test("Delete Response", async({request}) => {
  const resp1 = await request.delete("https://reqres.in/api/users/2");
  expect(resp1.status()).toBe(204);
  expect(resp1.statusText()).toBe("No Content");
  console.log(await resp1.json());
})