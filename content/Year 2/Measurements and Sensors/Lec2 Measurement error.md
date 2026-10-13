---
tags:
  - year2-Sem1
  - Sensors
---

nothing is ever fully perfect, as so, no measuring instrument is full accurate
these errors are a result of many reasons which we will discuss

# Error types
which can summed up to 3 types:
<div class="xtable" style="--text-align: center;">
<b>Gross error</b>
<b>Systematic error</b>
<b>Random error</b>
</div>

## Gross error
error due to human mistakes, *i.e*:
- **using instruments**: using the wrong scale in measurement
- **recording observation**: transpose of the reading while recording *(reading 24.9mV instead of 29.4 mV)*
- **caclculation measurement results**: misunderstanding the unit in case of digital devices *(21V instead of 21mV)*

## Systematic error
errors due to problems with the instrument
- **instrument errors**: possible incorrect calibration
- **Environmental errors**: a change in the environmental conditions could change the device parameters
- **Observational errors**: errors observed due to the observer (*parallax error*)

### parallax error
an error caused by the observer using the tools from a point of view that could make them misread the measurement result

like looking at a beaker from different angles
![[Pasted image 20261005005907.png]]


## Random errors
errors due to random factors

these errors are relatively small and can be reduced by increasing the number of readings and taking the average

# Measurement characteristics

## Expected value
the design value, that is the most probable measured value to be expected from calculations

## Accuracy
 the degree of closeness of a measured value to the *true/expected* value

## Precision
the degree of closeness of a measured value to the *previous readings*.
A measure of consistency or repeatability of measurements

![[Pasted image 20261005010950.png]]

## Resolution
The smallest change in a measured quantity that an instrument can respond to

## Significant figure
The number of digits used to represent a measured value
the higher the number, the more precise the reading gets

# Error in measurements

## Absolute error
the difference between the measured and expected value
the absolute error takes the units of the values
$$
e = Y_n - X_n
$$
- $e$ = absolute error
- $Y_n$ = expected value
- $X_n$ = measured value

## Percent error
the value of the absolute error divided by the expected value

$$
\text{Percent error \%} = \frac{e}{Y_n} \times 100
$$
substituting $e$ yields:
$$
\text{Percent error \%} = \left|\frac{Y_n - X_n}{Y_n}\right| \times 100
$$
## Relative accuracy
the inverse of the percent error:

$$
A  = 1-\left|\frac{Y_n - X_n}{Y_n}\right|
$$
to express the relative accuracy in percent:
$$
a = 100\% - \text{Percent error} = A\times100
$$

> [!note] 
>  relative accuracy $A$ itself isn't the percentage value like $a$ , it expresses a percentage value below 1
you can think about it as percentage divided by 100

## Precision
the precision of a measurement is how close it is to the average of other measurements

$$
\text{Precision} = 1- \left|\frac{X_n - \bar X_n}{\bar X_n}\right|
$$
where:
- $X_n$ the value of the nth measurement
- $\bar X_n$ the average set of the n measurement

## Deviation
for a set of measures: $x_1,\,x_2,\,\cdots , x_n$
the **arithmetic mean** is
$$
x_n = \frac{x_1,\,x_2,\,\cdots , x_n}{n}
$$
the **deviation** of a measure $x_i$ is the difference between the current measure and the arithmetic mean
$$
\begin{array}{c}
d_1 = x_1 - \bar x \\
d_2 = x_2 - \bar x \\
\vdots \\
d_n = x_n - \bar x \\
\end{array}
$$
> [!note]
> the sum of all deviations is *ZERO*

## Average deviation
for a set of deviations $d_n$ , the average deviation is:
$$
D = \frac{|d_1|+|d_2|+\cdots+|d_n|}{n}
$$

## Standard deviation
for a set of deviations $d_n$ , the standard deviation is:
$$
S = \frac{\sqrt{d^2_1+d^2_2+\cdots+d^2_n}}{n}
$$




