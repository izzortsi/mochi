Chapter 11

Discrete dynamical systems in one dimension

11.1. Period doubling

We now return to the logistic equation and the numerical investigation started in Section 10.1. Let us try to get a more complete picture by iterating one given initial condition for different values of $\mu$. Since we are only interested in the asymptotic behavior we first iterate 200 times and then plot the next 100 iterations.

$$\text{In}[1] := \text{BifurcationList}[f_, x0_, \{\mu_, \mu0_, \mu1\}, \text{opts}_\_] :=$$
$$\text{Block}[\{N\text{min}, N\text{max}, \text{Steps}\},$$
$$\text{N\text{min}, N\text{max}, \text{Steps} = \{N\text{min}, N\text{max}, \text{Steps}\} / . \{\text{opts}\} / .$$
$$\{N\text{min} \rightarrow 200, N\text{max} \rightarrow 300, \text{Steps} \rightarrow 300\};$$
$$\text{Flatten}[\text{Table}[\text{Module}[\{x\},$$
$$\text{x} = \text{Nest}[f, x0, N\text{min}];$$
$$\text{Map}[\{\mu, \#\} \&, \text{NestList}[f, x, N\text{max} - N\text{min}]],$$
$$\{\mu, \mu0, \mu1, (\mu1 - \mu0)/\text{Steps}\}],$$
$$1]];$$

The result is shown below.