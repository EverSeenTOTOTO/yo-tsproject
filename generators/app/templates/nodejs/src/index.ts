import 'reflect-metadata'; // reflect metadata support, uninstall if you do not need
import dotenv from 'dotenv'; // dotenv support, uninstall if you do not need

import { world } from '@/aliase';

dotenv.config();

export const hello = `${process.env.HELLO} ${world}`;

console.log(hello);
