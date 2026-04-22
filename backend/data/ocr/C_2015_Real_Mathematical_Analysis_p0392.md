70. Prove that the $n$-cell $\psi : [-1, 1]^n \to B^n$ in the proof of the Brouwer Fixed-Point Theorem has Jacobian $\rho'(r)\rho(r)^{n-1}/r^{n-1}$ for $r = |v|$ as claimed on page 355.

**71. The Hairy Ball Theorem** states that any continuous vector field $X$ in $\mathbb{R}^3$ that is everywhere tangent to the 2-sphere $S$ is zero at some point of $S$. Here is an outline of a proof for you to fill in. (If you imagine the vector field as hair combed on a sphere, there must be a cowlick somewhere.)

(a) Show that the Hairy Ball Theorem is equivalent to a fixed-point assertion: Every continuous map of $S$ to itself that is sufficiently close to the identity map $S \to S$ has a fixed-point. (This is not needed below but it is interesting.)

(b) If a continuous vector field on $S$ has no zero on or inside a small simple closed curve $C \subset S$, show that the net angular turning of $X$ along $C$ as judged by an observer who takes a tour of $C$ in the counterclockwise direction is $-2\pi$. (The observer walks along $C$ in the counterclockwise direction when $S$ is viewed from the outside, and he measures the angle that $X$ makes with respect to his own tangent vector as he walks along $C$. By convention, clockwise angular variation is negative.) Show also that the net turning is $+2\pi$ if the observer walks along $C$ in the clockwise direction.

(c) If $C_t$ is a continuous family of simple closed curves on $S$, $a \leq t \leq b$, and if $X$ never equals zero at points of $C_t$, show that the net angular turning of $X$ along $C_t$ is independent of $t$. (This is a case of a previous exercise stating that a continuous integer-valued function of $t$ is constant.)

(d) Imagine the following continuous family of simple closed curves $C_t$. For $t = 0$, $C_0$ is the Arctic Circle. For $0 \leq t \leq 1/2$, the latitude of $C_t$ decreases while its circumference increases as it oozes downward, becomes the Equator, and then grows smaller until it becomes the Antarctic Circle when $t = 1/2$. For $1/2 \leq t \leq 1$, $C_t$ maintains its size and shape, but its new center, the South Pole, slides up the Greenwich Meridian until at $t = 1$, $C_t$ regains its original arctic position. See Figure 135. Its orientation has reversed. Orient the Arctic Circle $C_0$ positively and choose an orientation on each $C_t$ that depends continuously on $t$. To reach a contradiction, suppose that $X$ has no zero on $S$.

(i) Why is the total angular turning of $X$ along $C_0$ equal to $-2\pi$?

(ii) Why is it $+2\pi$ on $C_1$?

(iii) Why is this a contradiction to (c) unless $X$ has a zero somewhere?

(iv) Conclude that you have proved the Hairy Ball Theorem.