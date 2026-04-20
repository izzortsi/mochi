If $x_1 = 0$ then $\text{sign}(x_1)$ has to be replaced by $-\text{sign}(U'(x_0))$. Fixed points of the equation of motion (6.42) are the solutions of $\dot{x} = 0$, $U'(x) = f(x) = 0$ and hence correspond to extremal points of the potential. Moreover, if $U(x)$ has a local minimum at $x_0$, the energy (more precisely $E - U(x_0)$) can be used as Liapunov function, implying that $x_0$ is stable if $U(x)$ has a local minimum at $x_0$. In summary,

**Theorem 6.16.** Newton’s equation has a fixed point if and only if $\dot{x} = 0$ and $U'(x) = 0$ at this point. Moreover, a fixed point is stable if $U(x)$ has a local minimum there.

Note that a fixed point cannot be asymptotically stable (why?).

Now let us investigate some examples. We first look at the so called **mathematical pendulum** given by

$$\ddot{x} = -\sin(x).$$

(6.48)

Here $x$ describes the displacement angle from the position at rest ($x = 0$). In particular, $x$ should be understood modulo $2\pi$. The potential is given by $U(x) = 1 - \cos(x)$. To get a better understanding of this system we will look at some solutions corresponding to various initial conditions. This is usually referred to as phase portrait of the system. We will use *Mathematica* to plot the solutions. The following code will do the computations for us.

```mathematica
In[2]:= PhasePlot[f_, ic_, tmax_, opts___] :=
Block[{i, n = Length[ic], ff, ivp, sol, phaseplot},
  ff = f /. {x -> x[t], y -> y[t]};
  Do[
    ivp = {x'[t] == ff[[1]], y'[t] == ff[[2]],
      x[0] == ic[[i, 1]], y[0] == ic[[i, 2]]};
    sol = NDSolve[ivp, {x[t], y[t]}, {t, -tmax, tmax}];
    phaseplot[i] =
      ParametricPlot[{x[t], y[t]}/.sol, {t, -tmax, tmax}, ]
    , {i, 1, n}];
    Show[Table[phaseplot[i], {i, 1, n}], opts]
  ];
```

Next, let us define the potential

```mathematica
In[3]:= U[x_] = 1 - Cos[x];
Plot[U[x], {x, -2π, 2π}, Ticks -> False]
```