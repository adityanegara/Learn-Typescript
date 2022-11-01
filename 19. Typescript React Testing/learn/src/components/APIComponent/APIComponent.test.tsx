import { render, screen, waitFor} from "@testing-library/react";
import APIComponent from "./APIComponent";
import { rest } from "msw";
import { setupServer} from "msw/node"

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
      return res(ctx.json({ name: "Jack" }));
    })
  );
  

describe("Connect to external API.", () =>{

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('should be able to display user name', async () =>{
        render(<APIComponent />);
        const out = await waitFor(() => screen.getByRole("contentinfo"));
        expect(out).toHaveTextContent("Name is Jack");
    })
})