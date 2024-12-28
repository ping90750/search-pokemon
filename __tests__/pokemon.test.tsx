describe("Pokemon Tests", () => {
  it("should match Bulbasaur as Grass type", () => {
    const bulbasaur = { name: "Bulbasaur", type: "Grass" };
    expect(bulbasaur.type).toBe("Grass");
  });

  it("should match Charmander as Fire type", () => {
    const charmander = { name: "Charmander", type: "Fire" };
    expect(charmander.type).toBe("Fire");
  });

  it("should match Squirtle as Water type", () => {
    const squirtle = { name: "Squirtle", type: "Water" };
    expect(squirtle.type).toBe("Water");
  });
});
