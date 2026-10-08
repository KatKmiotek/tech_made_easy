---
title: What Happens to Your Password?
sidebar_position: 6
---

# What Happens to Your Password?

When you create a password on a website, a good website should **not simply save your password as readable text**.

Instead, it should transform it into something called a:

## Password hash

A hash is like a **digital fingerprint** of your password.

Your password goes in...

and a strange-looking result comes out.

For example:

`BlueHorseRiverLamp`

might become something that looks like:

`8f4a9c2b7d...`

<div className="alert alert--info" role="alert">

The exact technical details are complicated, but the important idea is simple:

**the website should not need to store your actual password.**

</div>

---

## What happens when you log in?

When you type your password:

1. The website puts it through the same process
2. It creates a new fingerprint
3. It compares that fingerprint with the one it already has

If they match, you are allowed in.

The website does not need to look at your original password.

---

## A useful clue

Have you ever clicked:

**Forgot my password**

and the website lets you create a new one?

That is normal.

But imagine a website sends you an email saying:

> “Your password is BlueHorseRiverLamp”

That would be worrying.

<div className="alert alert--warning" role="alert">

A reputable website should normally **reset** your password rather than tell you what your old password was.

If it can simply show you your old password, it may be storing it in an unsafe way.

</div>

---

## Can hashes be cracked?

Sometimes.

Attackers can take a stolen list of password hashes and try millions or billions of possible passwords against them.

If they guess the correct password, they can create the same fingerprint.

This is another reason why:

- short passwords
- common passwords
- predictable passwords

are much easier to break.

---

## Websites can make this harder

Good websites use extra protections when storing passwords.

One example is called **salting**.

You do not need to remember the technical term.

Just think of it as adding some extra randomness before creating the password fingerprint.

<div className="alert alert--success" role="alert">

**Fun fact**

Two people can use the same password, but a well-designed website can still store two different password fingerprints for them.

</div>

---

## But there is an important catch

Even the best password storage cannot protect you if:

- you type your password into a fake website
- malware steals it from your device
- you reuse it somewhere else
- you give it to someone

So password security is about more than just the password itself.

---

## Quick question

If a company suffers a data breach, what would you rather criminals steal?

### A

A list containing everyone's actual passwords

### B

A list containing protected password hashes

The answer is **B**.

It is still serious, but properly protected hashes are much harder for criminals to use.

<div className="alert alert--success" role="alert">

**The useful thing to remember:**

Good websites should protect your password even from their own staff.

</div>
