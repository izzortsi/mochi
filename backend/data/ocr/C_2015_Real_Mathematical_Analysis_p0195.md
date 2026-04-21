Proof #2 Since $f$ is Riemann integrable, it is bounded; say $|f(x)| \leq M$ for all $x$. By Corollary 30 we have

$$|F(y) - F(x)| = \left| \int_x^y f(t) \, dt \right| \leq M |y - x|.$$

Therefore $F$ is continuous. Given $\epsilon > 0$, choose $\delta < \epsilon/M$, and observe that $|y - x| < \delta$ implies that $|F(y) - F(x)| < M\delta < \epsilon$. In exactly the same way, if $f$ is continuous at $x$ then

$$\frac{F(x + h) - F(x)}{h} = \frac{1}{h} \int_x^{x+h} f(t) \, dt \rightarrow f(x)$$

as $h \rightarrow 0$. For if

$$m(x, h) = \inf\{f(s) : |s - x| \leq |h|\} \quad M(x, h) = \sup\{f(s) : |s - x| \leq |h|\}$$

then

$$m(x, h) = \frac{1}{h} \int_x^{x+h} m(x, h) \, dt \leq \frac{1}{h} \int_x^{x+h} f(t) \, dt$$

$$\leq \frac{1}{h} \int_x^{x+h} M(x, h) \, dt = M(x, h).$$

When $f$ is continuous at $x$, $m(x, h)$ and $M(x, h)$ converge to $f(x)$ as $h \rightarrow 0$, and so must the integral sandwiched between them,

$$\frac{1}{h} \int_x^{x+h} f(t) \, dt \rightarrow f(x).$$

(If $h < 0$ then $\frac{1}{h} \int_x^{x+h} f(t) \, dt$ is interpreted as $-\frac{1}{h} \int_x^{x+h} f(t) \, dt.$)

35 Corollary The derivative of an indefinite Riemann integral exists almost everywhere and equals the integrand almost everywhere.

Proof Assume that $f : [a, b] \rightarrow \mathbb{R}$ is Riemann integrable and $F(x)$ is its indefinite integral. By the Riemann-Lebesgue Theorem, $f$ is continuous almost everywhere, and by the Fundamental Theorem of Calculus, $F'(x)$ exists and equals $f(x)$ wherever $f$ is continuous.

A second version of the Fundamental Theorem of Calculus concerns antiderivatives. If one function is the derivative of another, the second function is an antiderivative of the first.