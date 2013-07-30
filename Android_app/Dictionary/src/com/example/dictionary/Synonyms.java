package com.example.dictionary;

import java.util.ArrayList;

import com.example.dictionary.ViewPagerAdapter;

import android.os.Bundle;

import android.app.ActionBar;
import android.app.ActionBar.LayoutParams;
import android.app.ActionBar.Tab;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Fragment;
import android.app.FragmentTransaction;
import android.content.Intent;
import android.gesture.GestureOverlayView;
import android.gesture.GestureOverlayView.OnGestureListener;
import android.graphics.Color;
import android.support.v4.view.ViewPager;
import android.util.TypedValue;
import android.view.GestureDetector;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.SimpleAdapter.ViewBinder;
import android.widget.TableRow;
import android.widget.TextView;

public class Synonyms extends Activity 
{
	private int WordNumber = 0;
	ArrayList<TextView> ViewList;
	private int nPages = 0;
	int scrollState;
	 Boolean isFirstVisitEnd= true,isFirstVisitBegin = true;
	 ArrayList<Integer> pos = new ArrayList<Integer>();
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.synonym);
		
		ViewList = new ArrayList<TextView>();
		Intent intent = getIntent();
        String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
        String[] textArray=message.split(",");
        nPages = textArray.length -1;
        
        for(int i=0;i<=nPages;i++)
        {	
        	TextView tv=new TextView(this);
        	tv.setText(textArray[i]);
        	WordNumber++;
            tv.setTextSize(getResources().getDimension(R.dimen.textsize));
            tv.setId(WordNumber+5);
            tv.setTextColor(Color.GRAY);
            tv.setGravity(Gravity.CENTER);
            ViewList.add(tv);
            
        } 
        
       ViewPagerAdapter adapter = new ViewPagerAdapter(this, ViewList);
		final ViewPager myPager = (ViewPager)findViewById(R.id.myfivepanelpager);
		myPager.setAdapter(adapter);
		myPager.setCurrentItem(1);
       
		myPager.setOnPageChangeListener(new ViewPager.OnPageChangeListener() {

	        @Override
	        public void onPageSelected(int arg0) 
	        {
	        	pos.clear();
                if (arg0 == 0)
                {
                    isFirstVisitEnd = false;
                    isFirstVisitBegin = true;
                }
                else if (arg0 == nPages)
                {
                	isFirstVisitBegin = false;
                	isFirstVisitEnd = true;
                }  
                else
            	{
            	isFirstVisitBegin = false;
            	isFirstVisitEnd = false;
            	}
            	
	        }

	        @Override
	        public void onPageScrolled(int arg0, float arg1, int arg2) 
	        {
	        	try { 
                    pos.add(Integer.valueOf(arg2));

                    if (pos.size() > 0) 
                    {
                        if (arg0 == (nPages) & scrollState == 1 & isFirstVisitEnd == true) 
                        {                          
                            myPager.setCurrentItem(0, false);
                        }
                        if (arg0 == 0 & scrollState == 2 & isFirstVisitBegin == true) 
                        {                         
                            myPager.setCurrentItem(nPages, false);
                        }       
                    }
                } catch (Exception e) {} 
	        }
	
			public boolean onCreateOptionsMenu(Menu menu) {
				getMenuInflater().inflate(R.menu.activity_main, menu);
				return true;
			}

			@Override
			public void onPageScrollStateChanged(int arg0) 
			{
				scrollState =arg0;
			}
			
			});
		}

}

/*
public class Synonyms extends Activity
{
	private int WordNumber = 0;
    @SuppressLint({ "NewApi", "NewApi" })
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.synonym);
        
        Intent intent = getIntent();
        String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
       
        String[] textArray=message.split(",");
        int length=textArray.length;
        LinearLayout rel = new LinearLayout(this);
        for(int i=1;i<2;i++)
        {	
        	TextView tv=new TextView(this);
        	tv.setText(textArray[WordNumber++]);
            tv.setTextSize(getResources().getDimension(R.dimen.textsize));
            tv.setId(WordNumber+5);
            LayoutParams p = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
            tv.setLayoutParams(p);
            rel.addView(tv);
        } 
        rel.setGravity(Gravity.CENTER);
        setContentView(rel);
    }
}
*/
