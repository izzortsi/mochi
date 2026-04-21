(a) **positive definiteness**: $d(x, y) \geq 0$, and $d(x, y) = 0$ if and only if $x = y$.

(b) **symmetry**: $d(x, y) = d(y, x)$.

(c) **triangle inequality**: $d(x, z) \leq d(x, y) + d(y, z)$.

The function $d$ is also called the **distance function**. Strictly speaking, it is the pair $(M, d)$ which is a metric space, but we will follow the common practice of referring to “the metric space $M$,” and leave to you the job of inferring the correct metric.

The main examples of metric spaces are $\mathbb{R}$, $\mathbb{R}^m$, and their subsets. The metric on $\mathbb{R}$ is $d(x, y) = |x - y|$ where $x, y \in \mathbb{R}$ and $|x - y|$ is the magnitude of $x - y$. The metric on $\mathbb{R}^m$ is the Euclidean length of $x - y$ where $x, y$ are vectors in $\mathbb{R}^m$. Namely,

$$d(x, y) = \sqrt{(x_1 - y_1)^2 + \ldots + (x_m - y_m)^2}$$

for $x = (x_1, \ldots, x_m)$ and $y = (y_1, \ldots, y_m)$.

Since Euclidean length satisfies the three distance properties, $d$ is a bona fide metric and it makes $\mathbb{R}^m$ into a metric space. A subset $M \subset \mathbb{R}^m$ becomes a metric space when we declare the distance between points of $M$ to be their Euclidean distance apart as points in $\mathbb{R}^m$. We say that $M$ **inherits** its metric from $\mathbb{R}^m$ and is a **metric subspace** of $\mathbb{R}^m$. Figure 27 shows a few subsets of $\mathbb{R}^2$ to suggest some interesting metric spaces.

There is also one metric that is hard to picture but valuable as a source for counterexamples, the **discrete metric**. Given any set $M$, define the distance between distinct points of $M$ to be 1 and the distance between every point and itself to be 0. This is a metric. See Exercise 4. If $M$ consists of three points, say $M = \{a, b, c\}$, you can think of the vertices of the unit equilateral triangle as a model for $M$. See Figure 28. They have mutual distance 1 from each other. If $M$ consists of one, two, or four points can you think of a model for the discrete metric on $M$? More challenging is to imagine the discrete metric on $\mathbb{R}$. All points, by definition of the discrete metric, lie at unit distance from each other.

**Convergent Sequences and Subsequences**

A sequence of points in a metric space $M$ is a list $p_1, p_2, \ldots$ where the points $p_n$ belong to $M$. Repetition is allowed, and not all the points of $M$ need to appear in the list. Good notation for a sequence is $(p_n)$, or $(p_n)_{n \in \mathbb{N}}$. The notation $\{p_n\}$ is also used but it is too easily confused with the set of points making up the sequence. The difference between $(p_n)_{n \in \mathbb{N}}$ and $\{p_n : n \in \mathbb{N}\}$ is that in the former case