import { getBalance } from "../src/async";

test("mock async function", async() =>{
    const from=jest.fn().mockResolvedValueOnce(1000);
    await expect(getBalance("Rama", from)).resolves.toEqual({name:"Rama", balance:1000});

    expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async() =>{
    const from=jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Rama", from);
});

test("mock async function error matchers", async () =>{
    const from=jest.fn();
    from.mockRejectedValueOnce("Rejected");
    
    expect(getBalance("Rama", from)).rejects.toBe("Rejected");
});

