3.1. The matrix exponential

We begin with the study of the autonomous linear first-order system

$$\dot{x}(t) = Ax(t), \quad x(0) = x_0,$$

(3.1)

where $A$ is an $n$ by $n$ matrix. Here, as usual, we write $Ax$ for the matrix product whose components are given by

$$(Ax)_i = \sum_{j=1}^{n} A_{i,j} x_j,$$

(3.2)

where $(A_{i,j})_{1 \leq i,j \leq n}$ are the entries of $A$ and $(x_j)_{1 \leq j \leq n}$ are the components of $x$. We also recall the definition of the scalar product and norm

$$x \cdot y = \sum_{j=1}^{n} x_j^* y_j, \quad |x| = \sqrt{x \cdot x} = \left( \sum_{j=1}^{n} |x_j|^2 \right)^{1/2}.$$

(3.3)

Here $*$ denotes complex conjugation which can of course be omitted in the real case. We will also use $A^j$ for the powers of $A$ defined inductively via $A^j = A^{j-1}A$ and $A^0 = \mathbb{I}$.