approach and think of $x$ as the function, $F$ as the input variable, and $y$ as the output variable. After all, why not? It’s a kind of mathematical yin/yang.

Now consider a path integral the way it is defined in calculus,

$$\int_C f \, dx + g \, dy = \int_0^1 f(x(t), y(t)) \frac{dx(t)}{dt} \, dt + \int_0^1 g(x(t), y(t)) \frac{dy(t)}{dt} \, dt.$$

$f$ and $g$ are smooth real-valued functions of $(x, y)$ and $C$ is a smooth path parameterized by $(x(t), y(t))$ as $t$ varies on $[0, 1]$. Normally you think of the integral as a number that depends on the functions $f$ and $g$. Taking the dual approach you can think of it as a number that depends on the path $C$. This will be our point of view. It parallels that found in Rudin’s *Principles of Mathematical Analysis*.

**Definition** A differential 1-form is a function that sends paths to real numbers and which can be expressed as a path integral in the previous notation. The name of this particular differential 1-form is $f \, dx + g \, dy$

In a way, this definition begs the question. For it simply says that the standard calculus formula for path integrals should be read in a new way – as a function of the integration domain. Doing so, however, is illuminating, for it leads you to ask: Just what property of $C$ does the differential 1-form $f \, dx + g \, dy$ measure?

First take the case that $f(x, y) = 1$ and $g(x, y) = 0$. Then the path integral is

$$\int_C \, dx = \int_a^b \frac{dx(t)}{dt} \, dt = x(b) - x(a)$$

which is the “net $x$-variation” of the path $C$. This can be written in functional notation as

$$dx : C \mapsto x(b) - x(a).$$

It means that $dx$ assigns to each path $C$ its net $x$-variation. Similarly $dy$ assigns to each path its net $y$-variation. The word “net” is important. Negative $x$-variation cancels positive $x$-variation, and negative $y$-variation cancels positive $y$-variation. In the world of forms, orientation matters.

What about $f \, dx$? The function $f$ “weights” $x$-variation. If the path $C$ passes through a region in which $f$ is large, its $x$-variation is magnified accordingly, and the integral $\int_C f \, dx$ reflects the net $f$-weighted $x$-variation of $C$. In functional notation

$$f \, dx : C \mapsto \text{net } f\text{-weighted } x\text{-variation} \text{ of } C.$$

Similarly, $g \, dy$ assigns to a path its net $g$-weighted $y$-variation, and the 1-form $f \, dx + g \, dy$ assigns to $C$ the sum of the two variations.