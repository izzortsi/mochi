2

A Taste of Topology

1 Metric Spaces

It may seem paradoxical at first, but a specific math problem can be harder to solve than some abstract generalization of it. For instance if you want to know how many roots the equation

$$t^5 - 4t^4 + t^3 - t + 1 = 0$$

can have then you could use calculus and figure it out. It would take a while. But thinking more abstractly, and with less work, you could show that every $n^{\text{th}}$-degree polynomial has at most $n$ roots. In the same way many general results about functions of a real variable are more easily grasped at an abstract level – the level of metric spaces.

Metric space theory can be seen as a special case of general topology, and many books present it that way, explaining compactness primarily in terms of open coverings. In my opinion, however, the sequence/subsequence approach provides the easiest and simplest route to mastering the subject. Accordingly it gets top billing throughout this chapter.

A **metric space** is a set $M$, the elements of which are referred to as points of $M$, together with a **metric** $d$ having the three properties that distance has in Euclidean space. The metric $d = d(x,y)$ is a real number defined for all points $x,y \in M$ and $d(x,y)$ is called the **distance** from the point $x$ to the point $y$. The three distance properties are as follows: For all $x,y,z \in M$ we have

© Springer International Publishing Switzerland 2015
C.C. Pugh, *Real Mathematical Analysis*, Undergraduate Texts in Mathematics, DOI 10.1007/978-3-319-17771-7_2